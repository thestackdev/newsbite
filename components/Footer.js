import { Footer } from 'flowbite-react'

export default function () {
  return (
    <Footer container={true}>
      <Footer.Copyright href="#" by="Fullstacklab" year={2022} />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  )
}
