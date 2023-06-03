import * as React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"


export default function Home() {
	return (
		<Layout>
            <Link to="note-1">Page-1</Link>
			<hr />
            <Link to="note-2">Page-2</Link>
        </Layout>
    )
}


