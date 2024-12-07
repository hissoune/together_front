import Api from "../api/Api.ts";
import {LoginField, RegisterField} from "../constant.ts";

class AuthService {
    private http: ReturnType<typeof Api>;

    constructor() {
        this.http = Api();
    }

   async register(data: RegisterField): Promise<RegisterField>{
        console.log(data);
        
        return await this.http.post('users', data)
    }

   async login(data: LoginField){
        console.log(data);
        
        return await this.http.post('/users/login',{email:data.email,password:data.password})
    }
}

export default new AuthService()