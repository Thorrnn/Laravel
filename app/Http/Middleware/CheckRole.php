<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;

class CheckRole
{

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $role)
    {
       if(Auth::check()){
           $user = Auth::user();
            if($user->role == $role){
                return $next($request);
            }
            else{
                return response()->view('errors.503', [], 503);
            }
       }else{
            return redirect('login');
       }
        return $next($request);
    }
}
