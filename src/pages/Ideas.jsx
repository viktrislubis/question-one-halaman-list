import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getIdeas } from "../api/ideasAPI";
import Header from "../components/Header";
import Banner from "../components/Banner";
import PostCard from "../components/PostCard";
import SortFilter from "../components/SortFilter";
import Pagination from "../components/Pagination";
import "../index.css";

function Ideas() {
  const [ideas, setIdeas] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = parseInt(searchParams.get("page")) || 1;
  const pageSize = parseInt(searchParams.get("size")) || 10;
  const sort = searchParams.get("sort") || "-published_at";

  const updateSearchParams = (params) => {
    setSearchParams({
      page: params.page ?? currentPage,
      size: params.size ?? pageSize,
      sort: params.sort ?? sort,
    });
  };

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const { data, meta } = await getIdeas({
          page: currentPage,
          size: pageSize,
          sort,
        });
        setIdeas(data);
        setTotalItems(meta.total);
      } catch (err) {
        console.error("Failed to fetch ideas", err);
      }
    };
    fetchIdeas();
  }, [currentPage, pageSize, sort]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <>
      <Header />
      <Banner />
      <div className="ideas-container">
        <div className="ideas-toolbar">
          <p className="ideas-summary">
            Showing {pageSize * (currentPage - 1) + 1}–
            {Math.min(currentPage * pageSize, totalItems)} of {totalItems}
          </p>
          <SortFilter
            sort={sort}
            setSort={(val) => updateSearchParams({ sort: val, page: 1 })}
            pageSize={pageSize}
            setPageSize={(val) => updateSearchParams({ size: val, page: 1 })}
          />
        </div>

        <div className="ideas-grid">
          {ideas.map((idea) => (
            <PostCard key={idea.id} idea={idea} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(totalItems / pageSize)}
          onPageChange={(page) => updateSearchParams({ page })}
        />
      </div>
    </>
  );
}

export default Ideas;
