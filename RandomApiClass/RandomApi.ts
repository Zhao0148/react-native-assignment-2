import { AvailableTypes, SampleSize, User } from "@/types";

export class RandomAPI {
  static baseUrl = "https://random-data-api.com/api/v2";

  static async fetch<T>(
    type: AvailableTypes,
    params: SampleSize = {}
  ): Promise<T> {
    try {
      const url = new URL(`${this.baseUrl}/${type}`);
      const searchParams = new URLSearchParams(url.search);

      if (params.fetchSampleSize !== undefined) {
        searchParams.set("size", params.fetchSampleSize.toString());
      }
      searchParams.set("response_type", "json");

      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && key !== "fetchSampleSize") {
          searchParams.append(key, value.toString());
        }
      });

      url.search = searchParams.toString();

      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`Error fetching ${type}:`, error);
      throw error;
    }
  }

  static async fetchUsers({ fetchSampleSize }: SampleSize): Promise<User[]> {
    return this.fetch(AvailableTypes.Users, { fetchSampleSize });
  }
}
