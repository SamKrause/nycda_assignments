class JobsController < ApplicationController
  def new
    @job = Job.new
  end

  def create
    @job = Job.create(job_params)
    redirect_to '/'
  end

  def destroy
  end

  def update
  end

  def show
  end

  private

  def job_params
  params.require(:job).permit(:name, :con_require, :cargo, :destination, :boat_id, :origin, :cost)
  end

end
