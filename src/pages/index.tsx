import DefaultLayout from "@/layouts/default";
import PostList from "@/components/PostList";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <PostList />
    </DefaultLayout>
  );
}
