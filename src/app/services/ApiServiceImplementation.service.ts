import { Injectable } from "@angular/core";
import { IApiService } from "./IApiService.service";
import { Profile } from "../models/Profile";
import { RouteApi } from "../models/config";
import { Followers } from "../models/Followers";
import { Repos } from "../models/Repos";

@Injectable({
    providedIn: 'root'
})
export class ApiServiceImplementation implements IApiService {
    _apiUrl: string;

    constructor() {
        this._apiUrl = "https://api.github.com/users";
    }
    async getFollowers(url: string): Promise<Followers[]> {
        let objFollow: Followers[] = [];
        try {
            await fetch(url)
                .then(response => response.json())
                .then(data => objFollow = data as Followers[]);
        } catch (error) {
            console.log(error);
        }
        return objFollow;
    }
    async getRepos(url: string): Promise<Repos[]> {
        let objFollow: Repos[] = [];
        try {
            await fetch(url)
                .then(response => response.json())
                .then(data => objFollow = data as Repos[]);
        } catch (error) {
            console.log(error);
        }
        return objFollow;
    }
    async getProfileContent(): Promise<Profile> {
        const url = this._apiUrl + "/github";
        let objProfile: Profile = {} as Profile;
        try {
            await fetch(url)
                .then(response => response.json())
                .then(data => objProfile = data as Profile);
        } catch (error) {
            console.log(error);
        }
        return objProfile;
    }

}