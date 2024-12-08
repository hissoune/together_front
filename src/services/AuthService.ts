import axiosInstance from '../api/Api';

const AuthService = {



    login: async (data:any) => {
      console.log(data);
      
        try {
          const response = await axiosInstance.post('auth/login', data);
          return response.data; 
        } catch (error) {
          console.error('Login failed:', error);
          throw error; 
        }
      },
      register:async (formdata:any) =>{     
        console.log(formdata);
           
        try {
            const response= await  axiosInstance.post('auth/register' ,formdata);
           
            
            return  response.data;
        } catch (error) {
            console.error('register failed:', error);
            throw error; 
        }
      },
    
}

export default AuthService;