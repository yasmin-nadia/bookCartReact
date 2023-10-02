import react, { useEffect, useState } from "react";
import useProductPostHook from "../hooks/userProductAdd";
import { useForm, Controller } from "react-hook-form";
const FetchPost = () => {
  const { createPost, loading } = useProductPostHook();
  const [productTitle, setProductTitle] = useState("");
  const [productDes, setProductDes] = useState("");
  const [productAuth, setProductAuth] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productStock, setProductStock] = useState(0);
  const [productPages, setProductPages] = useState(0);
  const [productCat, setProductCat] = useState("");
  const [productGenre, setProductGen] = useState([]);
  const [productPub, setProductPub] = useState("");

  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm();

  const formStyles = {
    maxWidth: "400px",
    margin: "0 auto",
  };

  const inputContainerStyles = {
    marginBottom: "15px",
  };

  const labelStyles = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  };
  const inputStyles = {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
    marginBottom: "5px",
  };
  const submitButtonStyles = {
    backgroundColor: "#734d26",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  };

  const handlerOnSubmit = (data) => {
    console.log("Form is submitted ", data);
    createPost(data);
  };
  useEffect(() => {
    console.log("Errors: ", errors);
  }, [errors]);

  return (
    <div>
      <h1>Add product</h1>
      {loading === true && <h4>Loading...</h4>}
      <form style={formStyles} onSubmit={handleSubmit(handlerOnSubmit)}>
        <div style={inputContainerStyles}>
          <label style={labelStyles}>Title:</label>
          <Controller
            name="title"
            control={control}
            rules={{
              required: "title is required",
              minLength: {
                value: 6,
                message: "Minimum length must be 6",
              },
              maxLength: {
                value: 20,
                message: "Minimum length must be 20",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter title"
                {...field}
                style={{ border: errors.title ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.title && <h5>{errors.title.message}</h5>}
        </div>

        <div style={inputContainerStyles}>
          <label style={labelStyles}>Author:</label>
          <Controller
            name="author"
            control={control}
            rules={{
              required: "author is required",
              minLength: {
                value: 6,
                message: "Minimum length must be 6",
              },
              maxLength: {
                value: 20,
                message: "Minimum length must be 20",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter author"
                {...field}
                style={{ border: errors.author ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.author && <h5>{errors.author.message}</h5>}
        </div>

        <div style={inputContainerStyles}>
          <label style={labelStyles}>Price:</label>
          <Controller
            name="price"
            control={control}
            rules={{
              required: "price is required",
              min: {
                value: 20,
                message: "Price must be greater than or equal to 20",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter price"
                {...field}
                style={{ border: errors.price ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.price && <h5>{errors.price.message}</h5>}
        </div>

        <div style={inputContainerStyles}>
          <label style={labelStyles}>Stock:</label>
          <Controller
            name="stock"
            control={control}
            rules={{
              required: "stock is required",
              min: {
                value: 5,
                message: "Stock must be greater than or equal to 5",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter stock"
                {...field}
                style={{ border: errors.stock ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.stock && <h5>{errors.stock.message}</h5>}
        </div>
        <div style={inputContainerStyles}>
          <label style={labelStyles}>Category:</label>
          <Controller
            name="category"
            control={control}
            rules={{
              required: "category is required",
              minLength: {
                value: 6,
                message: "category length must be 20",
              },
              maxLength: {
                value: 20,
                message: "Minimum length must be 100",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter category"
                {...field}
                style={{ border: errors.category ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.category && <h5>{errors.category.message}</h5>}
        </div>
        <div style={inputContainerStyles}>
          <label style={labelStyles}>Genre:</label>
          <Controller
            name="genre"
            control={control}
            rules={{
              required: "genre is required",
              minLength: {
                value: 5,
                message: "genre length must be 5",
              },
              maxLength: {
                value: 20,
                message: "Minimum length must be 20",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter category"
                {...field}
                style={{ border: errors.genre ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.genre && <h5>{errors.genre.message}</h5>}
        </div>
        <div style={inputContainerStyles}>
          <label style={labelStyles}>Description:</label>
          <Controller
            name="description"
            control={control}
            rules={{
              required: "description is required",
              minLength: {
                value: 5,
                message: "description length must be 5",
              },
              maxLength: {
                value: 200,
                message: "Minimum length must be 200",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter description"
                {...field}
                style={{ border: errors.description ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.description && <h5>{errors.description.message}</h5>}
        </div>
        <div style={inputContainerStyles}>
          <label style={labelStyles}>Publisher:</label>
          <Controller
            name="publisher"
            control={control}
            rules={{
              required: "publisher is required",
              minLength: {
                value: 6,
                message: "publisher length must be 6",
              },
              maxLength: {
                value: 200,
                message: "Minimum length must be 200",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter publisher"
                {...field}
                style={{ border: errors.publisher ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.publisher && <h5>{errors.publisher.message}</h5>}
        </div>
        <div style={inputContainerStyles}>
          <label style={labelStyles}>Pages:</label>
          <Controller
            name="pages"
            control={control}
            rules={{
              required: "pages is required",
            }}
            render={({ field }) => (
              <input
                placeholder="Enter pages"
                {...field}
                style={{ border: errors.pages ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.pages && <h5>{errors.pages.message}</h5>}
        </div>
        <button type="submit" style={submitButtonStyles}>
          Add Book
        </button>
      </form>
    </div>
  );
};
export default FetchPost;
