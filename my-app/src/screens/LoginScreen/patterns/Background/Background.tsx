import Image from "@/components/Image/Image";

export default function Background() {
  const imageUrl = 'https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=836&q=80';
  return (
    <Image
      src={imageUrl}
      alt="Imagem de fundo da página"
    />
  )
}
