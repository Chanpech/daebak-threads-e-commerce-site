import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'


export default function Member() {
  return (
    <div>
        <div>
            <h1>Membership</h1>
            <div>
                <span>Membership barcode</span>
                <img alt='barcode-text'></img>
                <p>You can shows this membership barcode to cashier or scan your own at self-checkout</p>
            </div>
            <div>
                <div>
                    <div>
                        <Link href='/'>
                            Chat Support 
                        </Link>
                    </div>
                    <div>
                        <Link href='/'>
                            Purchase History
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <h2>Profile Settings</h2>
                <p>Following information is shared with US. If you edit, your account information will be updated.</p>
                <div>
                    <div>
                        <Link href='/edit-account'>
                            Profile
                        </Link>
                    </div>
                    <div>
                        <Link href='/password-reset'>
                            Change my password
                        </Link>
                    </div>
                    <div>
                        <Link href='/delete-account'>
                            Delete my account
                        </Link>
                    </div>
                    <div>
                        <Button variant="outline">
                            Logout
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
