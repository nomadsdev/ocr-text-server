import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import ClipLoader from 'react-spinners/ClipLoader';

import BlurFade from "@/components/ui/blur-fade";

function App() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [extractedText, setExtractedText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("กรุณาเลือกไฟล์รูปภาพ");
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);
    
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const cleanedText = response.data.text.replace(/\s+/g, '');
      setExtractedText(cleanedText);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (extractedText) {
      navigator.clipboard.writeText(extractedText).then(() => {
        alert("คัดลอกข้อความแล้ว!");
      }).catch(err => {
        console.error("Error copying text: ", err);
      });
    }
  };

  return (
    <>
      <div className='flex justify-center px-5 py-[200px]'>
        <div className='w-full max-w-xl'>
          <div>
            <BlurFade delay={0.25} inView>
              <div>
                <h1 className='text-center th text-[30px]'>
                  ดึกข้อความจาก<span className='th text-transparent bg-clip-text bg-gradient-to-tr from-blue-400 to-rose-400'>รูปภาพ</span>
                </h1>
                <p className='text-xs text-zinc-600 text-center'>
                  เจเอ็มเอ็ม เอนเตอร์เทนเมนท์
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.25 * 2} inView>
              <div className='flex justify-center mt-10'>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="Image">รูปภาพ</Label>
                  <Input id="Image" type="file" onChange={handleFileChange} />
                </div>
              </div>
              <div className='flex justify-center mt-2'>
                {loading ? (  // แสดง loading spinner แทนปุ่ม
                  <ClipLoader color="#4A90E2" loading={loading} size={30} />
                ) : (
                  <Button variant={'outline'} className='w-full' onClick={handleUpload}>ดึงข้อมูล</Button>
                )}
              </div>
              <div className='mt-2'>
                <p className='text-center text-zinc-600 text-xs'>
                  เจเอ็มเอ็ม เอนเตอร์เทนเมนท์ © 2018 - 2024
                </p>
              </div>
            </BlurFade>

            <div className='mt-5'>
              {extractedText && (
                <div className='mt-5 border border-gray-200 p-2 rounded-[10px]'>
                  <div className='flex justify-end'>
                    <button className='text-xs border border-gray-200 rounded-md px-2 py-1' onClick={handleCopy}>
                      คัดลอก
                    </button>
                  </div>
                  <div className='mt-2'>
                    <p>{extractedText}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App; 