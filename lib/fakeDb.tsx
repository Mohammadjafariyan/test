


export class FakeDbSingleton {
    private static instance: FakeDbSingleton;

    private users:any[]=[];
  
    // Private constructor to prevent instantiation
    private constructor() {
      // Initialization code, if any
    }
  
    // Public method to access the FakeDbSingleton instance
    public static getInstance(): FakeDbSingleton {
        console.log("FakeDbSingleton.instance" , FakeDbSingleton.instance);
      if (!FakeDbSingleton.instance) {
        FakeDbSingleton.instance = new FakeDbSingleton();
      }
  
      return FakeDbSingleton.instance;
    }
  
    // Other methods or properties of the FakeDbSingleton class
    public addUser(user:any){
        this.users.push(user);
    }

    public findUser(username:any,password:any){
        
        console.log("this.users");
        console.log(this.users);
        return this.users.find(f=>f.username==username && f.password==password);

    }
  }
  

  