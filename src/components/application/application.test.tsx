import { render, screen } from "@testing-library/react"
import Application from "./application"

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />)

    const pageHeadingElement = screen.getByRole("heading", {
      level: 1,
    })
    expect(pageHeadingElement).toBeInTheDocument()

    const sectionHeadingElement = screen.getByRole("heading", {
      level: 2,
    })
    expect(sectionHeadingElement).toBeInTheDocument()

    const paragraphElement = screen.getByText("All fields are mandatory")
    expect(paragraphElement).toBeInTheDocument()

    const closeElement = screen.getByTitle("close")
    expect(closeElement).toBeInTheDocument()

    const imageElement = screen.getByAltText("a placeholder on a page")
    expect(imageElement).toBeInTheDocument()

    const customElement = screen.getByTestId("custom-element")
    expect(customElement).toBeInTheDocument()

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    })
    expect(nameElement).toBeInTheDocument()

    const nameElement2 = screen.getByLabelText("Name", {
      selector: "input",
    })
    expect(nameElement2).toBeInTheDocument()

    const nameElement3 = screen.getByPlaceholderText("Enter your name")
    expect(nameElement3).toBeInTheDocument()

    const nameElement4 = screen.getByDisplayValue("Dave")
    expect(nameElement4).toBeInTheDocument()

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    })
    expect(bioElement).toBeInTheDocument()

    const jobLocationElement = screen.getByRole("combobox")
    expect(jobLocationElement).toBeInTheDocument()

    const termsElement = screen.getByRole("checkbox")
    expect(termsElement).toBeInTheDocument()

    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    )
    expect(termsElement2).toBeInTheDocument()

    const submitButtonElement = screen.getByRole("button")
    expect(submitButtonElement).toBeInTheDocument()
  })
})
