import Image from "@/components/Image/Image";

export default function Background() {
  const imageUrl = 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3862&q=80';
  return (
    <Image
      src={imageUrl}
      alt="Imagem de fundo da página"
    />
  )
}