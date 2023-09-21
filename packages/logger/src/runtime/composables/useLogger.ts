import { useRuntimeConfig } from "#imports";

export function useLogger() {
  console.log(useRuntimeConfig());
}
