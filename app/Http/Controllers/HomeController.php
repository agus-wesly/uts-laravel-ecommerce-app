<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Product;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index() {
        
        $product1 = Product::where([
            'type_id' => 1
        ])->get();
        $product2 = Product::where([
            'type_id' =>2 
        ])->get();
        $product3 = Product::where([
            'type_id' =>3 
        ])->get();
        $product4 = Product::where([
            'type_id' =>4 
        ])->get();
        $product5 = Product::where([
            'type_id' => 5
        ])->get();


        return Inertia::render('Home', [
            'sepatu' => $product1,
            'baju' => $product2,
            'tas' => $product3,
            'jamTangan' => $product4,
            'kacamata' => $product5,
        ]);
    }
}
