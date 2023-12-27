import { Followers } from "../models/Followers";
import { Profile } from "../models/Profile";
import { Repos } from "../models/Repos";

export interface IApiService {
    getProfileContent(): Promise<Profile>;
    getFollowers(url: string): Promise<Followers[]>;
    getRepos(url: string): Promise<Repos[]>;
}