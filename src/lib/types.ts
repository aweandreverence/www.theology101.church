// Video data types
export interface Video {
  videoId: string;
  topic: string;
  title: string;
  lessonName: string | null;
  description: string;
  youtubeURL: string;
  tags: string[];
}

export interface Theology101Data {
  topics: string[];
  tags: string[];
  lookups: {
    video_id: Record<string, Video>;
    topic: Record<string, string[]>;
    tag: Record<string, string[]>;
  };
}

// Navigation types
export interface NavLink {
  name: string;
  url: string;
}

// Sidebar types
export interface SidebarEntry {
  name: string;
  count: number;
}
