import { useEffect } from "react"
import Heading from "../ui/Heading"
import Row from "../ui/Row"
import { getCabins } from "../services/apiCabins"
import CabinTable from "../features/cabins/CabinTable"

function Cabins() {
  // useEffect(function () {
  //   console.log("inside useEffect => Cabins.jsx")
  //   getCabins()
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err))
  // }, [])

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>filter and sort</p>
      </Row>

      <Row>
        <CabinTable />
      </Row>

      {/* <img
        src="https://hwqhrpgyjhtyxnsrxrow.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg"
        alt="cabin-image"
      /> */}
    </>
  )
}

export default Cabins
