// auth.js
const SUPABASE_URL = 'https://oajnnrrnatqqymmvncxf.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ham5ucnJuYXRxcXltbXZuY3hmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5Nzc2MDMsImV4cCI6MjA5MjU1MzYwM30.VwnyHdSeN286aGWLuoS-QMy1sZakMmCIwYjWsLh0AWA';


// Tämä funktio hoitaa kirjautumisen
async function suoritaKirjautuminen(email, password) {
    const response = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
        method: 'POST',
        headers: {
            'apikey': ANON_KEY,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
    });

    const data = await response.json();

    if (response.ok) {
        localStorage.setItem('supabase_token', data.access_token);
        window.location.href = 'index.html'; 
    } else {
        alert('Kirjautuminen epäonnistui: ' + data.error_description);
    }
}