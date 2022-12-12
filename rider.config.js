let System = System || {
    config: () => {
    }
};
System.config({
                  "paths": {
                      "~/*": ".src/",
                      "~/pages": ".pages/",
                      "~gqlContentfulConfig": ".src/config/gqlContentfulConfig.ts",
                  }
              })