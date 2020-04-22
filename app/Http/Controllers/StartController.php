<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StartController extends Controller
{
    public function chartData()
    {
        return[
            'labels' =>['март','апрель','май','июнь'],
            'datasets' => array([
                'label' =>'Prod',
                'backgroundColor' => '#F26202',
                'data' => [15000, 5000, 10000, 30000],
            ])
        ];
    }
}
