import Api from "../api/Api.ts";

class PlaylistService {
  private http: ReturnType<typeof Api>;

  constructor() {
    this.http = Api(); 
  }

  async getPlaylists(): Promise<any[]> {    
    const response = await this.http.get("/playlist");
    return response.data
  }

  async createPlaylist(data: { name: string; videos: string[] }): Promise<any> {
    const response = await this.http.post("/playlist", data);
    return response.data;
  }

}

export default new PlaylistService();
