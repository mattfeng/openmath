import React, { Component } from "react"
import Layout from "../components/layout"

class Home extends Component {

  render() {
    return (
      <Layout>
        <h1>Open Mathematics Textbook</h1>
        <p>The goal of the open mathematics textbook is to provide a compilation of notes, lectures, and problem sets that span a variety of mathematical subject areas, in a way that is responsive to its users (e.g. issues and clarifications can be resolved transparently and quickly).</p>

        <table>
          <tr>
            <th>Course</th>
            <th>Details</th>
          </tr>

          <tr>
            <td><a href="/linalg/">Linear Algebra</a></td>
            <td>MIT 18.06, taught in Fall 2010.</td>
          </tr>

          <tr>
            <td><a href="/diffeq/">Differential Equations</a></td>
            <td>MIT 18.03, taught in Fall 2018.</td>
          </tr>

          <tr>
            <td><a href="/introml/">Introduction to Machine Learning</a></td>
            <td>MIT 6.036, taught in Fall 2017.</td>
          </tr>
        </table>
      </Layout>
    )
  }
}

export default Home
