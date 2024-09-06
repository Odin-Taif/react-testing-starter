import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProductImageGallary", () => {
  it("should return null(nothing in the dom) when the array is empty", () => {
    // Arrange |  we redner our component and store it in a result const
    const result = render(<ProductImageGallery imageUrls={[]} />);
    // act && assert | we assert that the result.container is empty.
    expect(result.container).toBeEmptyDOMElement();
  });
  it("should render a list of images ", () => {
    //Arrange | we simulate an image urls array
    const imageUrls = ["url1", "url2"];
    // we render the component
    render(<ProductImageGallery imageUrls={imageUrls} />);

    // Act | we get the rendered images tags
    const images = screen.getAllByRole("img");

    // Asset | we assert that images array has a length of two.
    expect(images).toHaveLength(2);
    // we also assert that for each img we get the same scr as the one in imageUrls array.
    imageUrls.forEach((url, index) => {
      expect(images[index]).toHaveAttribute("src", url);
    });
  });
});
