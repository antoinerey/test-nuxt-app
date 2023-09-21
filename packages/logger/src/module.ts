import {
  defineNuxtModule,
  addImports,
  addServerPlugin,
  createResolver,
} from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "my-module",
    configKey: "myModule",
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    addImports({
      name: "useLogger",
      from: resolver.resolve("./runtime/composables/useLogger"),
    });

    addServerPlugin(resolver.resolve("./runtime/server/plugin"));
  },
});
