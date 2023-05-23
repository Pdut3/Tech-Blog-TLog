const commentFormHandler = async function (event) {
    event.preventDefault();
  
    const blog_id = document.querySelector(".newCommentForm").dataset.blogid;
  
    const commentDescription = document
      .querySelector("#commentDescription").value;
  
    if (commentDescription) {
      await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({
          blog_id,
          commentDescription,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      document.location.reload();
    } else {
      alert("Could Not Post Comment. Please Try Again");
    }
  };
  
  document
    .querySelector(".newCommentForm")
    .addEventListener("submit", commentFormHandler);