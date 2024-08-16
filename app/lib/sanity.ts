import {createClient} from "next-sanity"
import imageURLBuilder from '@sanity/image-url'

export const client = createClient({
    apiVersion: "2023-05-03",
    dataset:"production",
    projectId:"bvx5s14r",
    useCdn: false
})

const builder = imageURLBuilder(client)

export function urlFor(source: any){
    return builder.image(source)
}