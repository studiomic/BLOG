// src/pages/page2.js
import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"

export default function Page2() {
    return (
		<Layout>
            <div>Page2</div>
            <Link to="../">ホームに戻る</Link>
        </Layout>
    )
}