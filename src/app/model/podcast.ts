
  export interface Podcast {
    version: string;
    title: string;
    home_page_url: string;
    description: string;
    author: Author;
    items: Item[];
}

  export interface Author {
      name: string;
  }

  export interface Author2 {
      name: string;
  }

  export interface Item {
      guid: string;
      url: string;
      title: string;
      content_html: string;
      summary: string;
      date_published: Date;
      author: Author2;
  }


