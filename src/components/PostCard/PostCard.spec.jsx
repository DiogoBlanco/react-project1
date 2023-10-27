import { render, screen } from "@testing-library/react";
import { PostCard } from ".";
import { PostCardProps } from "./mock";

const props = PostCardProps;

describe("<PostCard/>", () => {
  it("should render Postcard correctly", () => {
    render(<PostCard {...props} />);
    expect(screen.getByRole("img", { name: /title 1/i })).toHaveAttribute(
      "src",
      props.cover
    );
    expect(
      screen.getByRole("heading", { name: /title 1/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/body 1/i)).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
