const express = require('express')
const { createClient } = require ('@supabase/supabase-js')

const supabase = createClient('https://icgshfzhuocvtqqbycml.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljZ3NoZnpodW9jdnRxcWJ5Y21sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIyMjUzNjUsImV4cCI6MjAyNzgwMTM2NX0.z1ue6x-wqhWDRwxV9kAvV6QMQyMbtV4IOWV3DGrrmR0')




const app = express()
const port = 3000

app.get("/Artists", async (req, res) => {
    try {
      const { data, error } = await supabase.from("Artists").select();
      console.log(data);
      return res.send(data);
    } catch (error) {
      return res.send({ error });
    }
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})