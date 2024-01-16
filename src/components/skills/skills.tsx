import { useState, useEffect } from "react"
import { SkillsProps } from "./skills.types"
const Skills = (props: SkillsProps) => {
  const { skills } = props
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true)
    }, 1000)
  }, [])
  return (
    <>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>
        })}
      </ul>
      {isLoggedIn ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  )
}

export default Skills
