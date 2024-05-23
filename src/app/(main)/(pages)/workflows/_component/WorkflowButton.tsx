'use client'
import Workflowform from '@/components/forms/workflow-form'
import CustomModal from '@/components/globle/custome-model'
import { Button } from '@/components/ui/button'
import { useModal } from '@/provider/model-provider'
import { Plus } from 'lucide-react'
import React from 'react'

type Props = {}

const WorkflowButton = (props: Props) => {
  const { setClose, setOpen } = useModal();
  const handleClick = () => {
    setOpen(
      <CustomModal
        title="Create a Workflow Automation"
        subheading="Workflows are a powerfull that help you automate tasks."
      >
        <Workflowform />
      </CustomModal>
    )
  }
  return (
    <Button
      size={'icon'}
      onClick={handleClick}
      className='ms-3'
    >
      <Plus />
    </Button>
  )
}

export default WorkflowButton