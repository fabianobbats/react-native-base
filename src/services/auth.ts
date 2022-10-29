interface ResponseLogin {
  token: string,
  user: {
    nome: string,
    email: string
  }
}


export function login(): Promise<ResponseLogin> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'hdashdaskhkhdaadadasdad',
        user: {
          nome: 'fabiano batista',
          email: 'fabianobatista@outlook.com'
        }
      });
    }, 2000);
  });
}