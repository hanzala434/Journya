

export async function fetchCompliances() {
  console.log("NEXTAUTH_URL:", process.env.NEXT_PUBLIC_NEXTAUTH_URL);

  const response=await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/compliance`);
  const compliance=await response.json();
  return compliance;
}


