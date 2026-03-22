import { useRef, useState } from "react";
import { useFetch } from "../hooks/use-fetch";

const API_URL = "https://api.github.com";

interface GitHubUser {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  score: number;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: "User" | "Organization" | "Bot";
  url: string;
  user_view_type: "public" | "private";
}

interface ApiResponse {
  total_count: number;
  incomplete_results: false;
  items: GitHubUser[];
}

const debounceFunc = (delay: number, func: () => void) => {
  let timeOut: ReturnType<typeof setTimeout>;
  return () => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => func(), delay);
  };
};

const ProjectTwo = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const { data, loading, error } = useFetch<ApiResponse>(
    `${API_URL}/search/users${searchValue ? `?q=${searchValue}` : ""}`,
  );

  const latestValue = useRef("");

  const debouncedSearch = useRef(
    debounceFunc(1500, () => setSearchValue(latestValue.current)),
  );

  if (loading)
    return (
      <div className="font-bold text-center text-[20px] mt-[10rem]">
        loading...
      </div>
    );

  if (error) {
    return <div>{error?.toString()}</div>;
  }

  return (
    <div className="flex flex-col gap-2 items-center jutsiyf-center mt-[10rem]">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          const val = e.target.value.trim();
          setInputValue(val);
          latestValue.current = val;
          debouncedSearch.current();
        }}
        className="border rounded"
        placeholder="Enter text to search"
      />

      <div className="flex gap-14 flex-wrap justify-center ">
        {data?.items?.map((item, index) => {
          return (
            <div key={index} className=" flex items-center justify-center">
              <div
                className={`relative w-full max-w-sm bg-gray-900 rounded-2xl overflow-hidden card-glow transition-all duration-500 cursor-pointer scanline`}
              >
                {/* Top accent bar */}
                <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-60" />

                {/* Header block */}
                <div className="relative px-6 pt-7 pb-5">
                  {/* ID chip top-right */}
                  <div className="absolute top-5 right-5 flex items-center gap-1.5 bg-gray-800 border border-gray-700 rounded-full px-2.5 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 badge-pulse" />
                    <span className="text-gray-400 text-xs tracking-widest">
                      #{item?.id}
                    </span>
                  </div>

                  {/* Avatar */}
                  <div className="flex items-end gap-4 mb-5">
                    <div className="relative">
                      <img
                        src={item?.avatar_url}
                        alt={item?.login}
                        className="w-20 h-20 rounded-xl avatar-ring object-cover"
                      />
                      {item?.site_admin && (
                        <span className="absolute -bottom-1 -right-1 bg-yellow-400 text-gray-900 text-xs font-bold px-1.5 py-0.5 rounded-md">
                          ADMIN
                        </span>
                      )}
                    </div>

                    <div className="mb-1">
                      <p className="text-gray-500 text-xs tracking-[0.2em] uppercase mb-0.5">
                        github
                      </p>
                      <h2 className="text-green-300 text-2xl font-bold tracking-tight leading-none">
                        @{item?.login}
                      </h2>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="text-xs text-gray-500 tag">type:</span>
                        <span className="text-xs bg-gray-800 text-gray-300 border border-gray-700 rounded px-2 py-0.5 tag">
                          {item?.type}
                        </span>
                        <span className="text-xs bg-gray-800 text-gray-300 border border-gray-700 rounded px-2 py-0.5 tag">
                          {item?.user_view_type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Score */}
                  <div className="flex items-center gap-2 border-t border-gray-800 pt-4">
                    <span className="text-gray-500 text-xs tracking-widest">
                      SCORE
                    </span>
                    <div className="flex-1 h-px bg-gray-800" />
                    <span className="text-green-400 text-sm font-bold">
                      {item?.score}.00
                    </span>
                  </div>
                </div>

                {/* Links block */}
                <div className="px-6 pb-6 space-y-2.5">
                  {[
                    { label: "profile", href: item?.html_url, icon: "⌂" },
                    { label: "repos", href: item?.repos_url, icon: "◫" },
                    {
                      label: "followers",
                      href: item?.followers_url,
                      icon: "◈",
                    },
                    { label: "orgs", href: item?.organizations_url, icon: "⬡" },
                  ].map(({ label, href, icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-row flex items-center gap-3 bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-green-900 rounded-lg px-3.5 py-2.5 transition-all duration-200 group no-underline"
                    >
                      <span className="text-green-500 text-sm w-4 text-center">
                        {icon}
                      </span>
                      <span className="text-gray-300 text-xs tracking-widest uppercase flex-1">
                        {label}
                      </span>
                      <span className="link-arrow text-green-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </a>
                  ))}
                </div>

                {/* Node ID footer */}
                <div className="px-6 pb-5">
                  <div className="border-t border-gray-800 pt-3.5">
                    <p className="text-gray-600 text-xs tracking-wider break-all leading-relaxed">
                      node{" "}
                      <span className="text-gray-500">{item?.node_id}</span>
                    </p>
                  </div>
                </div>

                {/* Bottom accent */}
                <div
                  className={`h-0.5 w-full bg-gradient-to-r from-transparent via-green-400 to-transparent transition-opacity duration-500 opacity-20`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectTwo;
