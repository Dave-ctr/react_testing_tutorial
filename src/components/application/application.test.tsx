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

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    })
    expect(nameElement).toBeInTheDocument()

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    })
    expect(bioElement).toBeInTheDocument()

    const jobLocationElement = screen.getByRole("combobox")
    expect(jobLocationElement).toBeInTheDocument()

    const termsElement = screen.getByRole("checkbox")
    expect(termsElement).toBeInTheDocument()

    const submitButtonElement = screen.getByRole("button")
    expect(submitButtonElement).toBeInTheDocument()
  })
})
