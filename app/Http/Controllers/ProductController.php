<?php

namespace App\Http\Controllers;

use App\Image;
use App\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ProductController extends Controller
{
    function getProducts(){
            $products = Product::query();

            return $products->paginate(10);


    }


    function searchCategory(Request $request){
        $val = $request->get('category');
        $products= Product::query();
        $products->where('category',$val);
        return $products->paginate(10);   
    }
    function searchProducts(Request $request, $page = 1){
    
        $val = $request->get('search');
        $products= Product::query();
        $products->where(function($query) use($val) {
        $query->where('name','LIKE','%'.$val.'%')->orWhere('description','LIKE','%'.$val.'%');
    
                 });
        return $products->paginate(10);


    }
        function submitProduct(Request $request){
            $imagePath = '/images'; 
            $images = $request->images;
            $success = 0;
            

            $formData = json_decode($request->val);
            $date = $request->date_time;

            isset($formData->edit)?$submit_form=Product::find($formData->id):$submit_form= new Product(); 
            $submit_form->name = $formData->name;
            $submit_form->category = $formData->category;
            $submit_form->description = $formData->description;
            $submit_form->date_time = $date;
           
            if($submit_form->save()){
                foreach ($images as $i){ 
                    $picName= $this->generateName().'.jpg';
                    if($i->move(public_path($imagePath), $picName)){
                    $newImg = new Image();
                    $newImg->image_url = $imagePath.'/'.$picName;
                    $newImg->product_id = $submit_form->id;
                    $newImg->save();
                    
                    }
    
                }    
                Log::info($success);
                $error=false;


            }
            else $error = true;

            return Response(compact('error'));

        }

    function deleteProduct(Request $request){
        $id = $request->params['id'];
        $delete = Product::where('id',$id)->delete();
        $error = $delete?false:true;
        return Response(compact('error'));

    }

    function getImages($id){
            $images = Image::where('product_id',$id)->get();
            if($images){
                $error=false;
            }
            else $error=true;
            
            return Response(compact('images','error'));

    }

    function generateName(){
        return substr(str_shuffle('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'),1,10);
      }
    
}
