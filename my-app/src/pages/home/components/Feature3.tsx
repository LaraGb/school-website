import React from "react";
import Container from "../../../shared/components/container/Container";
import BlogCard from "../../../shared/components/blog_card/BlogCard";
import StylizedLinkBtn from "../../../shared/components/stylized_link_btn/StylizedButton";

const Feature3 = () => {
  return (
    <div>
      <Container>
        <div className="mb-12 space-y-2 text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
            Latest Articles
          </h2>
          <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
            Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt,
            debitis dolorum officia aliquid explicabo? Excepturi, voluptate?
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <div className="flex justify-center mt-10">
          <StylizedLinkBtn
            label="Veja nossos Posts"
            path=""
            isHighlighted={true}
          />
        </div>
      </Container>
    </div>
  );
};

export default Feature3;
