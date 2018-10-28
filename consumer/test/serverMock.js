
const { server } = require('../../provider/provider.js')
const port = process.env.API_PORT || 9123

const serverMessage = "Created './standalone/darwin-1.61.1/bin/pact-mock-service service --consumer 'consumer' --cors 'true' --pact_dir '/Users/gilgrz/pact-contract-testing/pact-example/pacts' --host '127.0.0.1' --log '/Users/gilgrz/pact-contract-testing/pact-example/logs/mockserver-integration.log' --pact-file-write-mode 'update' --port '8001' --provider 'provider' --pact_specification_version '2'' process with PID: 4079"
const pact = () => {

    const setup = () => {
      /*
        *@connnect to mock server;
        *@
      */
       server.listen(port, () => {
        console.log('\x1b[36m',`Setting up Pact with Consumer "Our Little Consumer" and Provider "Our Provider"
       using mock service on Port:${port} \n ${serverMessage}`)
    })

      return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve('done');
        },6000)
      })
         }
    const verify = () => {};
    const addInteraction = () => {};
    const finalize = () => {};

  
    return {
      setup,
      verify,
      addInteraction,
      finalize,
      Matchers,
    };
};

const Matchers = {
      somethingLike:(spec) => spec,
      term:(spec) => spec
    }


module.exports = {
  pact,
  Matchers
}