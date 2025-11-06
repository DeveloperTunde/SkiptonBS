import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import PostCard from "../../src/components/PostCard";
import { Post } from "../../src/types/post";

const mockPost: Post = {
  id: 1,
  title: "Test Post Title",
  content: "This is a test post content that should be truncated",
  slug: "test-post-slug",
  published_at: "2023-01-01T00:00:00Z",
  updated_at: "2023-01-01T00:00:00Z",
};

describe("PostCard", () => {
  it("renders correctly", () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <PostCard post={mockPost} onPress={mockOnPress} />
    );

    expect(getByText("Test Post Title")).toBeTruthy();
    expect(
      getByText("This is a test post content that should be truncated")
    ).toBeTruthy();
    expect(getByText("Published: 1/1/2023")).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <PostCard post={mockPost} onPress={mockOnPress} />
    );

    fireEvent.press(getByText("Read More"));
    expect(mockOnPress).toHaveBeenCalledWith(1);
  });

  it("calls onPress when card is pressed", () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <PostCard post={mockPost} onPress={mockOnPress} />
    );

    fireEvent.press(getByText("Test Post Title"));
    expect(mockOnPress).toHaveBeenCalledWith(1);
  });
});
