import { AiOutlineDelete } from "react-icons/ai"
import { AiOutlineEdit } from "react-icons/ai"
import { HiOutlineDocumentDuplicate } from "react-icons/hi"
import styled from "styled-components"
import { formatCurrency } from "../../utils/helpers"
import { useState } from "react"
import CreateCabinForm from "./CreateCabinForm"
import useDeleteCabin from "./useDeleteCabin"

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0 1rem;
`

const IconButton = styled.button`
  padding: 3px 5px;
  border: none;
  background-color: #bebebe60;
  border-radius: 3px;
  font-size: larger;
`

export default function CabinRow({ cabin }) {
  const [showForm, setShowForm] = useState(false)

  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
  } = cabin

  const { isDeleting, deleteCabin } = useDeleteCabin()

  return (
    <>
      <TableRow role="row">
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>fits up to {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <ButtonWrapper>
          <IconButton title="Duplicate">
            <HiOutlineDocumentDuplicate />
          </IconButton>
          <IconButton title="Edit" onClick={() => setShowForm((show) => !show)}>
            <AiOutlineEdit />
          </IconButton>
          <IconButton
            title="Delete"
            onClick={() => deleteCabin(cabinId)}
            disabled={isDeleting}
          >
            <AiOutlineDelete />
          </IconButton>
        </ButtonWrapper>
      </TableRow>
      {showForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  )
}
