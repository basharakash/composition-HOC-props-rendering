class Contex {
  constructor(value) {
    this.value = value;
  }

  // provider
  Provider = ({ children, value }) => {
    this.value = value;
    return children;
  };

  // consumer
  Consumer = ({ children }) => children(this.value);
}

function createContext(value = null) {
  const context = new Contex(value);
  return {
    Provider: context.Provider,
    Consumer: context.Consumer,
  };
}

export default createContext;
