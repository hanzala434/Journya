

export async function fetchCompliances() {

  const response=await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/compliance`);
  const compliance=await response.json();
  return compliance;
}


