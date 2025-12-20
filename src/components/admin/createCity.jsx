"use client"
import { AuthContext } from '@/app/context/page'
import { Edit, Loader2, Save, Trash, Upload, X } from 'lucide-react'
import React, { useContext, useRef, useState } from 'react'
import TiptapEditor from './TiptapEditor'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { uploadFile } from '@/app/services/uploadImg'
import { baseUrl } from "@/app/utils/Constant";
const CreateCity = () => {

     const { Toaster,
      
        handleSubmitCreateBlog,
        handleChangeCreateBlog,
      createBlogFormData,
      uploadingHero
    }=useContext(AuthContext)

  
 

  
  

  

 
 
  
  return (
    <div>
 <section className="my-4">
        <Toaster position="top-center" />

        <div className="customContainer bg-white p-5 rounded-lg mx-auto shadow-sm">
          <div className="flex items-center justify-between gap-2 border-b pb-3">
            <h2 className="flex items-center gap-2 text-2xl font-semibold border-neutral-200">Create City</h2>
          </div>

          <form className="space-y-4 my-4" onSubmit={handleSubmitCreateBlog}>
            {/* Title and Slug Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-xs text-gray-500">headLine *</label>
                <input
                  type="text"
                  className="border rounded-lg px-3 py-2 text-sm w-full outline-none border-gray-200 bg-gray-100"
                  placeholder="Enter City headLine"
                  name="headLine"
                  value={createBlogFormData.title}
                  onChange={handleChangeCreateBlog}
                  
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-xs text-gray-500">stats *</label>
                <input
                  type="text"
                  className="border rounded-lg px-3 py-2 text-sm w-full outline-none border-gray-200 bg-gray-100"
                  placeholder="blog-slug"
                  name="slug"
                  value={createBlogFormData.slug}
                  onChange={handleChangeCreateBlog}
                  
                />
              </div>
              
            </div>

            {/* Image and Status Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

               <div className="flex flex-col gap-2">
                <label className="font-semibold text-xs text-gray-500">city</label>
                <div className="flex flex-col gap-2">
               
                <input
                  type="text"
                  className="border rounded-lg px-3 py-2 text-sm w-full outline-none border-gray-200 bg-gray-100"
                  placeholder="blog-slug"
                  name="city"
                  value={createBlogFormData.slug}
                  onChange={handleChangeCreateBlog}
                  
                />
              </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-xs text-gray-500">Upload Image *</label>
                {uploadingHero ? (
                  <>
                    <Loader2 className="w-8 h-8 mb-4 text-[#ce3c3d] animate-spin" />
                    <p className="mb-2 text-sm text-[#ce3c3d] font-semibold">Uploading ...</p>
                  </>
                ) : (
                  <input
                    type="file"
                    className="border rounded-lg px-3 py-2 text-sm w-full outline-none border-gray-200 bg-gray-100"
                    placeholder="Choose image file"
                    name="image"
                    onChange={handleChangeCreateBlog}
                    
                  />
                )}
              </div>
           
            </div>

            {/* Short Description and Meta Title Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-xs text-gray-500">Short Description</label>
                <input
                  type="text"
                  className="border rounded-lg px-3 py-2 text-sm w-full outline-none border-gray-200 bg-gray-100"
                  placeholder="Enter Short Description"
                  name="shotDescription"
                  value={createBlogFormData.shotDescription}
                  onChange={handleChangeCreateBlog}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-xs text-gray-500">Meta Title</label>
                <input
                  type="text"
                  className="border rounded-lg px-3 py-2 text-sm w-full outline-none border-gray-200 bg-gray-100"
                  placeholder="Enter Meta Title"
                  name="metaTittle"
                  value={createBlogFormData.metaTittle}
                  onChange={handleChangeCreateBlog}
                />
              </div>
            </div>

            {/* Rich Text Editor for Description */}
            <div className="w-full flex flex-col gap-2">
              <label className="font-semibold text-xs text-gray-500">Paragraph *</label>
              <textarea
                className="border rounded-lg px-3 py-2 text-sm w-full outline-none border-gray-200 bg-gray-100"
                placeholder="Enter Meta Description"
                name="metaDescription"
                value={createBlogFormData.metaDescription}
                onChange={handleChangeCreateBlog}
                rows={3}
              />
            </div>

            {/* Meta Fields Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-xs text-gray-500">Meta Keywords</label>
                <input
                  type="text"
                  className="border rounded-lg px-3 py-2 text-sm w-full outline-none border-gray-200 bg-gray-100"
                  placeholder="Enter Meta Keywords (comma separated)"
                  name="metaKeyword"
                  value={createBlogFormData.metaKeyword}
                  onChange={handleChangeCreateBlog}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-xs text-gray-500">Updated By</label>
                <input
                  type="text"
                  className="border rounded-lg px-3 py-2 text-sm w-full outline-none border-gray-200 bg-gray-100"
                  placeholder="Enter Author Name"
                  name="updatedBy"
                  value={createBlogFormData.updatedBy}
                  onChange={handleChangeCreateBlog}
                />
              </div>
            </div>

            {/* Meta Description */}
            <div className="w-full flex flex-col gap-2">
              <label className="font-semibold text-xs text-gray-500">Meta Description</label>
              <textarea
                className="border rounded-lg px-3 py-2 text-sm w-full outline-none border-gray-200 bg-gray-100"
                placeholder="Enter Meta Description"
                name="metaDescription"
                value={createBlogFormData.metaDescription}
                onChange={handleChangeCreateBlog}
                rows={3}
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="px-8 py-3 bg-[#ce3c3d] text-white font-medium rounded-full hover:shadow-lg transition-all duration-300"
              >
                Publish Blog
              </button>
            </div>
          </form>
        </div>

        

       
      </section>
    </div>
  )
}

export default CreateCity
