const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.NOTION_KEY });

export async function anyfunction() {
  return notion.pages.retrieve({
    page_id: process.env.NOTION_PAGE_ID,
  });

  // return { props: { data } };
}
