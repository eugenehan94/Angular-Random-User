export interface LinkFourUserData {
    data: LinkFourUser
    support: Support
}

export interface LinkFourUser {
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
  }
  
  export interface Support {
    url: string
    text: string
  }
