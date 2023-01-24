USE pixar;
SELECT 
    M.id, M.title, B.domestic_sales, B.international_sales
FROM
    movies M
        INNER JOIN
    box_office B ON M.id = B.movie_id;


SELECT 
    M.id, M.title, B.domestic_sales, B.international_sales, B.domestic_sales + B.international_sales AS sum
FROM
    movies M
        INNER JOIN
    box_office B ON M.id = B.movie_id
WHERE
    B.international_sales > B.domestic_sales;



SELECT 
    M.id, M.title, B.rating
FROM
    movies M
        INNER JOIN
    box_office B ON M.id = B.movie_id
ORDER BY B.rating DESC;