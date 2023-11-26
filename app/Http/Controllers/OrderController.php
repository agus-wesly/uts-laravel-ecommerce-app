<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function show() {

        return Inertia::render('Order', [
        ]);
    }

    public function create(Request $request) {
        $validated = $request->validate([
            'address' => 'required|string|min:3' ,
            'total' => 'required' ,
        ]);


        $items = [];
        foreach ($request->input('items') as $item) {
            $tempItem = [];
            $tempItem['product_id'] = $item['id'];
            $tempItem['quantity'] = $item['qty'];

            array_push($items, $tempItem);
        }
        
        $user = Auth::user();
        $order = $user->orders()->create([
            'address' => $validated['address'],
            'total' => $validated['total'],
        ]);

        $order->orderDetails()->createMany($items);


        return to_route('checkout');
       
    }
}
