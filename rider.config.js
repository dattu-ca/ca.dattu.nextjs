let System = System || {
    config: () => {
    }
};
System.config({
                  "paths": {
                      "~/*": ".src/",
                      "~/pages": ".pages/",
                      "~gqlConfig": ".src/services/graphql.config.ts",
                      "~gqlContentful": ".src/services/graphql/contentful.graphql.ts",
                  }
              })